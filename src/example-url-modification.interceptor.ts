import {
	HttpHandlerFn,
	HttpInterceptorFn,
	HttpRequest,
} from '@angular/common/http';

export const ExampleUrlModificationInterceptor: HttpInterceptorFn = (
	req: HttpRequest<unknown>,
	next: HttpHandlerFn,
) => {
	if (req.url === 'typicode.com/posts') {
		console.log('INTERCEPTED URL');
		req = req.clone({
			url: 'https://jsonplaceholder.typicode.com/posts',
		});
	}
	console.log(req);
	return next(req);
};
