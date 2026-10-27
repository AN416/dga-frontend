import { h } from "@stencil/core";
import { guid } from "../../utils";
export class DgaFileUpload {
    constructor() {
        this.id = guid();
        this.name = guid();
        this.title = 'Drag and drop files here to upload';
        this.fileTypesText = 'Maximum file size allowed is 2MB, supported file formats include .jpg, .png, and .pdf.';
        this.actionName = 'Browse Files';
        this.disabled = false;
        this.files = [];
        this.dragState = false;
        this.handleFileSelection = (event) => {
            const input = event.target;
            this.onChange && this.onChange(event);
            const selectedFiles = input.files;
            if (selectedFiles) {
                if (this.maximumFilesSize) {
                    const isFileOverSize = Array.from(selectedFiles).some(file => {
                        return file.size > this.maximumFilesSize;
                    });
                    if (isFileOverSize) {
                        this.uploadFileOverSize && this.uploadFileOverSize();
                        return;
                    }
                }
                const fileItems = Array.from(selectedFiles).map(file => ({
                    name: file.name,
                    uploadStatus: 'pending', // initial status
                }));
                this.files = this.multiple ? [...this.files, ...fileItems] : (fileItems.length > 0 ? [fileItems[fileItems.length - 1]] : []);
                this.getUploadedFile && this.getUploadedFile([...this.files]);
            }
        };
        this.handleDrop = (event) => {
            event.preventDefault();
            event.stopPropagation();
            const droppedFiles = event.dataTransfer.files; // Accessing the dropped files
            if (droppedFiles) {
                const fileItems = Array.from(droppedFiles).map(file => ({
                    name: file.name,
                    uploadStatus: 'pending',
                }));
                this.files = this.multiple ? [...this.files, ...fileItems] : (fileItems.length > 0 ? [fileItems[fileItems.length - 1]] : []); // Update state with new files
                this.getUploadedFile && this.getUploadedFile([...this.files]);
            }
            this.dragState = false;
        };
        this.addDragOverClass = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.dragState = true;
        };
        this.removeDragOverClass = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.dragState = false;
        };
    }
    componentDidLoad() {
        const dropArea = (this.hostEl && this.hostEl.shadowRoot ? this.hostEl.shadowRoot.querySelector('.file-upload__drop-area') : (this.hostEl ? this.hostEl.querySelector('.file-upload__drop-area') : document.querySelector('.file-upload__drop-area')));
        if (dropArea) {
            dropArea.addEventListener('dragover', this.addDragOverClass);
            dropArea.addEventListener('dragleave', this.removeDragOverClass);
            dropArea.addEventListener('drop', this.handleDrop);
        }
    }
    disconnectedCallback() {
        const dropArea = (this.hostEl && this.hostEl.shadowRoot ? this.hostEl.shadowRoot.querySelector('.file-upload__drop-area') : (this.hostEl ? this.hostEl.querySelector('.file-upload__drop-area') : document.querySelector('.file-upload__drop-area')));
        if (dropArea) {
            dropArea.removeEventListener('dragover', this.addDragOverClass);
            dropArea.removeEventListener('dragleave', this.removeDragOverClass);
            dropArea.removeEventListener('drop', this.handleDrop);
        }
    }
    handleDeleteFile(index, file) {
        this.files = [...this.files.slice(0, index), ...this.files.slice(index + 1)];
        if (this.fileInputRef) { this.fileInputRef.value = ""; }
        this.emitDeleteFile && this.emitDeleteFile(file, index);
        if (this.hostEl) {
            this.hostEl.onDeleteFile && this.hostEl.onDeleteFile(file, index);
            this.hostEl.dispatchEvent(new CustomEvent('fileDeleted', { detail: { file, index } }));
            this.hostEl.dispatchEvent(new CustomEvent('deleteFile', { detail: { file, index } }));
        }
    }
    renderFile(file, index) {
        if (file.uploadStatus === 'error') {
            return (h("div", { class: "file-upload__file-item--error" }, h("div", { class: "file-upload__file-item" }, h("span", { class: "file-upload__file-status file-upload__file-status--error" }, h("dga-icon", { name: "checkmark-circle-04", variant: "solid", size: 20 })), h("span", { class: "file-upload__file-name" }, file.name), h("button", { class: "dga-btn dga-btn--close dga-btn--icon dga-btn--sm", onClick: () => this.handleDeleteFile(index, file) }, h("span", { class: "dga-btn-icon" }, h("dga-icon", { name: "multiplication-sign", variant: "stroke", size: 16 })))), h("div", { class: "file-upload__file-item-msg" }, file.errorMessage ? file.errorMessage : 'Here goes the helper text.')));
        }
        return (h("div", { class: "file-upload__file-item" }, h("span", { class: `file-upload__file-status file-upload__file-status--${file.uploadStatus}` }, file.uploadStatus === 'uploading' && file.progress && h("dga-loading", { size: "tiny", variant: "neutral" }), file.uploadStatus === 'complete' && h("dga-icon", { name: "checkmark-circle-02", variant: "solid", size: 20 })), h("span", { class: "file-upload__file-name" }, file.name), h("button", { class: "dga-btn dga-btn--close dga-btn--icon dga-btn--sm", onClick: () => this.handleDeleteFile(index, file) }, h("span", { class: "dga-btn-icon" }, h("dga-icon", { name: "multiplication-sign", variant: "stroke", size: 20 })))));
    }
    render() {
        return (h("div", { key: '438497434496293c6feeb678060365574f59b7a5', class: `file-upload ${this.dragState ? 'file-upload--drag-over' : ''} ${this.disabled ? 'file-upload--disabled' : ''}` }, h("input", { key: 'ac0ed83af1cfe56aae27f4d2200d021aa4a65e17', type: "file", id: this.id, name: this.name, class: "file-upload__input", accept: this.accept, multiple: this.multiple, "aria-hidden": "true", onChange: this.handleFileSelection, ref: el => (this.fileInputRef = el) }), h("label", { key: 'a91708c021305490bb61c9af0beff3e3a9b2e7da', htmlFor: this.id, class: "file-upload__drop-area" }, h("span", { key: '59857af47374c98acafbad6033e88005576409a8', class: "file-upload__icon" }, h("dga-icon", { key: '7f778b86c7a73c9982e3cd2cdf932a52eda3e55f', name: "file-upload", variant: "stroke", size: 24 })), h("div", { key: 'fdf9816ad59ae8278e5588bcb37355a9b8e3f42f', class: "file-upload__content" }, h("p", { key: '3bef0ef47e52823485b5153a2acbb8d4b2e99994', class: "file-upload__instructions" }, this.title), h("p", { key: '565899c627e1e5b5217dcbd2cda3716a2ffaaeb1', class: "file-upload__formats" }, this.fileTypesText)), h("dga-button-v2", { key: '2f827456109c80b61a80b08528698eb516c55f36', disabled: this.dragState || this.disabled, onClick: () => { var _a; return (_a = this.fileInputRef) === null || _a === void 0 ? void 0 : _a.click(); }, variant: "secondary-solid", size: "md", label: this.actionName })), h("div", { key: '5b2e4cd0491ae6e53cc3323554eec5eeb6d8ec5b', class: "file-upload__files-list" }, this.files.map((file, index) => this.renderFile(file, index)))));
    }
    static get is() { return "dga-file-upload"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-file-upload.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-file-upload.css"]
        };
    }
    static get properties() {
        return {
            "id": {
                "type": "string",
                "attribute": "id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "guid()"
            },
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "guid()"
            },
            "accept": {
                "type": "string",
                "attribute": "accept",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "multiple": {
                "type": "boolean",
                "attribute": "multiple",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "title": {
                "type": "string",
                "attribute": "title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Drag and drop files here to upload'"
            },
            "fileTypesText": {
                "type": "string",
                "attribute": "file-types-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Maximum file size allowed is 2MB, supported file formats include .jpg, .png, and .pdf.'"
            },
            "actionName": {
                "type": "string",
                "attribute": "action-name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Browse Files'"
            },
            "maximumFilesSize": {
                "type": "number",
                "attribute": "maximum-files-size",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "getUploadedFile": {
                "type": "unknown",
                "attribute": "get-uploaded-file",
                "mutable": false,
                "complexType": {
                    "original": "(\n    files: {\n      name: string;\n      uploadStatus: 'pending' | 'uploading' | 'complete' | 'error';\n      progress?: number; // from 0 to 100, if uploading\n      errorMessage?: string;\n    }[],\n  ) => void",
                    "resolved": "(files: { name: string; uploadStatus: \"error\" | \"pending\" | \"uploading\" | \"complete\"; progress?: number; errorMessage?: string; }[]) => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "uploadFileOverSize": {
                "type": "unknown",
                "attribute": "upload-file-over-size",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(event: Event) => void",
                    "resolved": "(event: Event) => void",
                    "references": {
                        "Event": {
                            "location": "global",
                            "id": "global::Event"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "emitDeleteFile": {
                "type": "unknown",
                "attribute": "emit-delete-file",
                "mutable": false,
                "complexType": {
                    "original": "(\n    file: {\n      name: string;\n      uploadStatus: 'pending' | 'uploading' | 'complete' | 'error';\n      progress?: number; // from 0 to 100, if uploading\n      errorMessage?: string;\n    },\n    index: number,\n  ) => void",
                    "resolved": "(file: { name: string; uploadStatus: \"error\" | \"pending\" | \"uploading\" | \"complete\"; progress?: number; errorMessage?: string; }, index: number) => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "files": {},
            "dragState": {}
        };
    }
}
