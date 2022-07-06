
export interface TemplateFetcher {
    (templateName: string): Promise<string>;
}

export interface TemplateRenderer<TData = unknown> {
    (templateName: string, data: TData): Promise<string>;
};