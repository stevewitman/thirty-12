import { async, TestBed } from '@angular/core/testing';
import { UiPageNotFoundModule } from './ui-page-not-found.module';

describe('UiPageNotFoundModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiPageNotFoundModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiPageNotFoundModule).toBeDefined();
  });
});
