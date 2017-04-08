import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('WelcomeComponent', () => {
  let component;

  beforeEach(async () => {
    component = StageComponent
      .withResources('../../src/welcome')
      .inView('<welcome></welcome>');
    await component.create(bootstrap);
  });

  it('should render correctly', () => {
    expect(document.body.outerHTML).toMatchSnapshot();
  })

  it('should render first name', () => {
    const nameElement = document.querySelector('#fn');
    expect(nameElement.value).toBe('John');
  });

  afterEach(() => {
    component.dispose();
  });
});
