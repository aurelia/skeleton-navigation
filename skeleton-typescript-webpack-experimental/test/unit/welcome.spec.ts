import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';

describe('WelcomeComponent', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('../src/welcome')
      .inView('<welcome></welcome>');
  });

  it('should render correctly', async () => {
    await component.create(bootstrap);
    expect(document.body.outerHTML).toMatchSnapshot();
  })

  it('should render first name', async () => {
    await component.create(bootstrap);
    const nameElement = document.querySelector('#fn') as HTMLInputElement;
    expect(nameElement.value).toBe('John');
  });

  afterEach(() => {
    component.dispose();
  });
});
