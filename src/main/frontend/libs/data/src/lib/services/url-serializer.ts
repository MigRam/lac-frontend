import { UrlSerializer, UrlTree, DefaultUrlSerializer } from '@angular/router';

export class CustomUrlSerializer implements UrlSerializer {
    parse(url: any): UrlTree {
        return new DefaultUrlSerializer().parse(url);
    }

    serialize(tree: UrlTree): any {
        return new DefaultUrlSerializer()
            .serialize(tree)
            .replace(/%2F/g, '/');
    }
}
