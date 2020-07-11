import { Test, TestingModule } from '@nestjs/testing';
import { SearchAuthorsHandler } from './search-authors.handler';

describe('SearchAuthorsHandler', () => {
  let service: SearchAuthorsHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchAuthorsHandler],
    }).compile();

    service = module.get<SearchAuthorsHandler>(SearchAuthorsHandler);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
