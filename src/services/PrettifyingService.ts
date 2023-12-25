class PrettifyingService {
  whitespace: number;

  constructor(whitespace: number) {
    this.whitespace = whitespace;
  }

  private removeEmptyLinesAndParagraphs(query: string): string {
    const lines = query.split(' ');
    const nonEmptyLines = lines.filter((line) => line.trim() !== '');
    const result = nonEmptyLines.join('');
    return result.split('\n').join('');
  }

  public formatQuery(query: string): string {
    const queryWithoutEmptyLines = this.removeEmptyLinesAndParagraphs(query);
    let result = '';
    let indentationLevel = 0;

    for (let i = 0; i < queryWithoutEmptyLines.length; i++) {
      const char = queryWithoutEmptyLines[i];

      if (char === '{') {
        indentationLevel++;
        result += '{\n' + '  '.repeat(indentationLevel);
      } else if (char === '}') {
        indentationLevel--;
        result += '\n' + '  '.repeat(indentationLevel) + '}';
      } else {
        result += char;
      }
    }
    return result;
  }
}

const prettifyingService = new PrettifyingService(2);

export default prettifyingService;
