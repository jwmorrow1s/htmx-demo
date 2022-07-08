export interface TemplateFetcher {
    (templateName: string): Promise<string>;
}
export type TemplateRegistrar = (templateName: string, renderFn: RenderFn) => void;
export type TemplateRenderFn = (props: unknown) => string;
export type TemplateRenderFnGetter = (name: string) => TemplateRenderFn | never;
export type TemplateRenderer = (name: string, props: unknown) => string;
