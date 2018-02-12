export class NotFound {
  path: string;

  activate(args) {
    this.path = args.path;
  }
}