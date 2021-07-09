import userService from './userService';

/* const dataFake = {
  _id: 'some id',
  photoUrl: 'https://images.endeavor.org.br/uploads/2015/05/simples-nacional1.jpg',
  description: 'some description',
  filter: 'some filter',
  user: 'some user',
  likes: [
    {
      _id: 'some id',
      user: 'some user',
    },
  ],
  createdAt: 'some data',
  updatedAt: 'some data 2',
  __v: 0,
};

async function HttpClientModule() {
  return {
    data: dataFake,
  };
} */

describe('postService', () => {
  describe('getProfilePage()', () => {
    describe('when user post an image', () => {
      describe('and succeed', () => {
        test('set the number of likes', async () => {
          const response = await userService.getProfilePage('senhasegura');
          await expect(response).toMatchSnapshot();
          await expect(response).toBeNull();
        });
      });
      describe('and it fails', () => {
        test('return null and keeping the same number of likes', async () => {
          const response = await userService.getProfilePage('');
          await expect(response).toMatchSnapshot();
          await expect(response).toBeNull();
        });
      });
    });
  });
});
