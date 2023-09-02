import { ParsedContent } from '@nuxt/content/dist/runtime/types';

type BoringAvatarProps = {
  name: string;
  size?: number;
  type: 'pixel' | 'marble' | 'beam' | 'sunset' | 'bauhaus' | 'ring' | 'bauhaus';
  square?: boolean;
};

export function boringAvatar({
  name,
  size = 50,
  type = 'pixel',
  square = false,
}: BoringAvatarProps) {
  const url = new URL('https://source.boringavatars.com');
  url.pathname = `${type}/${size}/${name}`;
  if (square) url.searchParams.set('square', '');

  return url.toString();
}

export function getBlogCover(blog: ParsedContent) {
  return (
    blog.cover ||
    boringAvatar({ name: blog.title!, size: 128, type: 'marble', square: true })
  );
}
