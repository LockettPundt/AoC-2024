export const splitByNewLine = (filePath: string): string[] => {
  const data = Deno.readTextFileSync(filePath);
  return data.split(/\n/g);
};

export const splitByRegex = (filePath: string, regex: RegExp): string[] => {
  const data = Deno.readTextFileSync(filePath);
  return data.split(regex);
};
