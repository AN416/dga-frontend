import { h } from "@stencil/core";
export class DgaDigitalSignatureUsage {
    render() {
        return (h("div", { key: '23da28f01461adfba68804f24c153489862fb13e', style: { width: '100%' } }, h("dga-digital-signature", { key: 'd57bf2e95d5f84f4fad67fd606c4fcba624c1f7f', language: "en", extension: ".gov.sa" }), h("dga-digital-signature", { key: '595c69f55ad788d3ede78b1b98321d526483b87f', extension: ".gov.sa", language: "en", linkProps: {
                inline: true,
                label: '20230103200',
                size: 'md',
                target: '_blank',
                external: true,
                url: 'https://scrimba.com/fullstack-path-c0fullstack',
                variant: 'primary'
            } })));
    }
    static get is() { return "dga-digital-signature-usage"; }
}
