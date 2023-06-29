import { Client } from '@notionhq/client';
import { z } from 'zod';

interface NotionContactItem {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const bodySchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
  })
  .transform((data): NotionContactItem => {
    return {
      Name: data.name,
      Email: data.email,
      Subject: data.subject,
      Message: data.message,
    };
  });

export async function POST(req: Request, res: Response) {
  const safeProperties = bodySchema.safeParse(await req.json());

  if (!safeProperties.success) {
    return new Response(JSON.stringify(safeProperties.error), {
      status: 400,
    });
  }

  await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID as string,
    },
    properties: {
      Name: {
        title: [{ text: { content: safeProperties.data.Name } }],
      },
      Email: {
        email: safeProperties.data.Email,
      },
      Subject: {
        multi_select: [{ name: safeProperties.data.Subject }],
      },
      Message: {
        rich_text: [{ text: { content: safeProperties.data.Message } }],
      },
    },
  });

  return new Response(null, {
    status: 201,
  });
}
