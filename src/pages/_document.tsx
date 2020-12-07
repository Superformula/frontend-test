import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'

export default class extends Document {
    public static async getInitialProps(
        context: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const { renderPage } = context

        try {
            context.renderPage = () =>
                renderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(context)

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}
