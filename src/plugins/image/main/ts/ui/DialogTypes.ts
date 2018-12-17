/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import { DialogInstanceApi } from '@ephox/bridge/lib/main/ts/ephox/bridge/components/dialog/Dialog';
import { Option } from '@ephox/katamari';

import { ImageData } from '../core/ImageData';
import { UploadHandler } from '../core/Uploader';
import { FileList, File } from '@ephox/dom-globals';

export interface ListValue {
  text: string;
  value: string;
}

export interface ListGroup {
  text: string;
  items: ListItem[];
}

export type ListItem = ListValue | ListGroup;

export interface ImageDialogInfo {
  image: ImageData;
  imageList: Option<ListItem[]>;
  classList: Option<ListItem[]>;
  hasAdvTab: boolean;
  hasUploadUrl: boolean;
  hasUploadHandler: boolean;
  hasDescription: boolean;
  hasImageTitle: boolean;
  hasDimensions: boolean;
  hasImageCaption: boolean;
  url: string;
  basePath: string;
  credentials: boolean;
  handler: UploadHandler;
  prependURL: Option<string>;
}

export interface ImageDialogData {
  src: {
    value: string;
    meta?: {
      text?: string;
      width?: string;
      height?: string;
      alt?: string;
      title?: string;
      class?: string;
      style?: string;
      vspace?: string;
      border?: string;
      hspace?: string;
      borderstyle?: string;
    }
  };
  images: string;
  alt: string;
  title: string;
  dimensions: {
    width: string;
    height: string;
  };
  classes: string;
  caption: 'checked' | 'unchecked';
  style: string; // we don't expose style anywhere
  vspace: string;
  border: string;
  hspace: string;
  borderstyle: string;
  fileinput: FileList | File[];
}

export type API = DialogInstanceApi<ImageDialogData>;