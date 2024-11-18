import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';

export async function POST(request: Request): Promise<NextResponse> {
  if (!request.body) throw new Error('Request body is null');

  const blob = await put(`/order/${uuid()}`, request.body, {
    access: 'public',
  });

  return NextResponse.json(blob);
}
