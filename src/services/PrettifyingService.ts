import type { errorMessagePrettifying } from '../types';

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

  private checkBracketsValidity(query: string): boolean | string {
    const stack: string[] = [];

    for (const el of query) {
      if (el === '{') {
        stack.push('{');
      } else if (el === '}') {
        if (stack.length === 0 || stack.pop() !== '{') {
          return '}';
        }
      }
    }

    if (stack.length > 0) {
      return '{';
    }

    return true;
  }

  public formatQuery(query: string, errorMessage: errorMessagePrettifying): string | Array<string> {
    try {
      const validationResult = this.checkBracketsValidity(query);
      if (typeof validationResult === 'string') {
        throw new Error(validationResult);
      }
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
    } catch (error) {
      if ((error as Error).message === '{') {
        return [errorMessage.textOpeningParenthesis];
      } else {
        return [errorMessage.textClosingParenthesis];
      }
    }
  }
}

const prettifyingService = new PrettifyingService(2);

export default prettifyingService;
