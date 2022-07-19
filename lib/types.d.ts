export interface TemplateFetcher {
    (templateName: string): Promise<string>;
}
export type TemplateRegistrar = (templateName: string, renderFn: RenderFn) => void;
export type TemplateRenderFn<T> = (props: T) => Promise<string>;
export type TemplateRenderFnGetter<T> = (name: string) => TemplateRenderFn<T> | never;
export type TemplateRenderer = (name: string, props: unknown) => Promise<string>;
