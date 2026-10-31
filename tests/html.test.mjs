import test from 'node:test';
import assert from 'node:assert/strict';
import {HtmlValidate} from 'html-validate';
import {render} from './fixture.mjs';
const validator = new HtmlValidate({
    extends: ['html-validate:recommended'],
    rules: {'void-style': 'off', 'no-trailing-whitespace': 'off', 'no-inline-style': 'off'}
});
for (const path of ['/demo/', '/demo/article/', '/demo/tag/creativity/', '/demo/author/alex/', '/demo/about/', '/demo/empty/', '/demo/article/no-image/', '/demo/article/editor-cards/', '/demo/article/image-rhythm/', '/demo/signin/', '/demo/signup/']) {
    test(`valid HTML and named landmarks: ${path}`, async () => {
        const result = await validator.validateString(render(path, {demo: true}));
        assert.equal(result.valid, true, JSON.stringify(result.results.flatMap(item => item.messages)));
    });
}
