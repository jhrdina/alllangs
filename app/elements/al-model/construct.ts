
class Construct {
  public title: string;

  private solutions: { [languageId: string]: string };

  public getSolutionForLanguage(languageId: string): string {
    return this.solutions[languageId];
  }

  public setSolutionForLanguage(languageId: string, solution: string) {
    this.solutions[languageId] = solution;
  }
}
