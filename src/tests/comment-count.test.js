import { countComments } from '../modules/display-comments';

describe('Display number of comments', () => {
  test('should display 0 Comments', () => {
    const commentDiv = { textContent: '' };
    const comments = [];
    countComments(commentDiv, comments);
    expect(commentDiv.textContent).toBe('0 Comments');
  });
  test('should display 1 Comments', () => {
    const commentDiv = { textContent: '' };
    const comments = [{ data: 1 }];
    countComments(commentDiv, comments);
    expect(commentDiv.textContent).toBe('1 Comments');
  });
});
