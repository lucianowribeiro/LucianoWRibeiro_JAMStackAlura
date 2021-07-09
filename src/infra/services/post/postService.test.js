import postService from './postService';

const dataFake = {
  _id: 'some id',
  photoUrl: 'some url',
  description: 'some description',
  filter: 'some filter',
  user: 'some user',
  likes: [],
  createdAt: 'some data',
  updatedAt: 'some data 2',
  __v: 0,
};

async function HttpClientModule() {
  return {
    data: dataFake,
  };
}

describe('postService', () => {
  describe('post()', () => {
    describe('when user post an image', () => {
      describe('and succeed', () => {
        test('store the post data', async () => {
          const { data } = await postService.post({
            photoUrl: 'some url',
            description: 'some description',
            filter: 'some filter',
          }, HttpClientModule);
          await expect(data).toMatchSnapshot();
          await expect(data.filter).toBe(dataFake.filter);
        });
      });
      describe('and it fails', () => {
        test('return null', async () => {
          const response = await postService.post({});
          await expect(response).toMatchSnapshot();
          await expect(response).toBeNull();
        });
      });
    });
  });
});
