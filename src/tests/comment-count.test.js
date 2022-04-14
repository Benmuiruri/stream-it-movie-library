import { countComments } from '../modules/comments-handler';

describe('Display number of comments', () => {
  test('should display 0 Comments', () => {
    const commentDiv = { textContent: '' };
    const comments = [{ data: 1 }];
    countComments(commentDiv, comments);
    expect(commentDiv.textContent).toBe('0 Comments');
  });
});
