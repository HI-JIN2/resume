import React from "react";
import { Link } from "../components/link";

const URL_REGEX = /(https?:\/\/[^\s\)]+)/g;

export const parseBold = (text: string): React.ReactNode[] => {
  // 먼저 URL을 찾아서 링크로 변환
  const urlParts: Array<{ type: "text" | "url"; content: string; url?: string }> = [];
  let lastIndex = 0;
  let match;

  while ((match = URL_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      urlParts.push({
        type: "text",
        content: text.substring(lastIndex, match.index),
      });
    }
    urlParts.push({
      type: "url",
      content: match[1],
      url: match[1],
    });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    urlParts.push({
      type: "text",
      content: text.substring(lastIndex),
    });
  }

  if (urlParts.length === 0) {
    urlParts.push({ type: "text", content: text });
  }

  // 각 부분을 처리 (볼드 텍스트와 일반 텍스트)
  const result: React.ReactNode[] = [];
  let keyIndex = 0;

  urlParts.forEach((part) => {
    if (part.type === "url") {
      result.push(
        <Link key={keyIndex++} href={part.url!} target="_blank" rel="noopener noreferrer">
          {part.content}
        </Link>
      );
    } else {
      // 볼드 텍스트 처리
      const boldParts = part.content.split(/(\*\*.+?\*\*)/g);
      boldParts.forEach((boldPart) => {
        if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
          result.push(
            <strong className="font-medium bg-gray-300/30" key={keyIndex++}>
              {boldPart.slice(2, -2)}
            </strong>
          );
        } else if (boldPart) {
          result.push(<React.Fragment key={keyIndex++}>{boldPart}</React.Fragment>);
        }
      });
    }
  });

  return result;
};
