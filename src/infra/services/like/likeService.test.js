import likeService from './likeService';

const dataFake = {
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
}

describe('likeService', () => {
  describe('like()', () => {
    describe('when click on image', () => {
      describe('and succeed', () => {
        test('setting the number of likes', async () => {
          const { data } = await likeService.like('some id', 1, HttpClientModule);
          await expect(data).toMatchSnapshot();
          await expect(data.likes.length).toBe(dataFake.likes.length);
        });
      });
      describe('and it fails', () => {
        test('return null and keeping the same number of likes', async () => {
          const response = await likeService.like('some id', {});
          await expect(response).toMatchSnapshot();
          await expect(response).toBeNull();
        });
      });
    });
  });
});
