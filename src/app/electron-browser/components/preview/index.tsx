import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
const pdfjs = require('pdfjs-dist/webpack');
const pdfjsViewer = require('pdfjs-dist/web/pdf_viewer');

import 'pdfjs-dist/web/pdf_viewer.css';

console.log(pdfjs.GlobalWorkerOptions);
const PdfComponent = ({ src, className }: { src: string, className: any }) => {
  const container = useRef(null)
  useEffect(() => {
    const fetchPdf = async () => {
      var CMAP_URL = "/node_modules/pdfjs-dist/cmaps/";
      var CMAP_PACKED = true;

      var SEARCH_FOR = "";
      var eventBus = new pdfjsViewer.EventBus();

      // (Optionally) enable hyperlinks within PDF files.
      var pdfLinkService = new pdfjsViewer.PDFLinkService({
        eventBus: eventBus,
      });

      // (Optionally) enable find controller.
      var pdfFindController = new pdfjsViewer.PDFFindController({
        eventBus: eventBus,
        linkService: pdfLinkService,
      });

      var pdfViewer = new pdfjsViewer.PDFViewer({
        container: container.current,
        eventBus: eventBus,
        linkService: pdfLinkService,
        findController: pdfFindController,
      });
      pdfLinkService.setViewer(pdfViewer);

      eventBus.on("pagesinit", function () {
        // We can use pdfViewer now, e.g. let's change default scale.
        console.log('pagesinit...');
        pdfViewer.currentScaleValue = "page-width";

        // We can try searching for things.
        if (SEARCH_FOR) {
          pdfFindController.executeCommand("find", { query: SEARCH_FOR });
        }
      });

      // Loading document.
      var loadingTask = pdfjs.getDocument({
        url: src,
        cMapUrl: CMAP_URL,
        cMapPacked: CMAP_PACKED,
      });
      loadingTask.promise.then(function (pdfDocument) {
        // Document loaded, specifying document for the viewer and
        // the (optional) linkService.
        console.log('loding...');
        console.log(pdfDocument);
        pdfViewer.setDocument(pdfDocument);
        pdfLinkService.setDocument(pdfDocument, null);
      });

    };

    fetchPdf();
  }, [src]);

  return (
    <div ref={container} className={className}>
      <div id="viewer" className="pdfViewer"></div>
    </div>
  );
}

PdfComponent.propTypes = {
  src: PropTypes.string
};

PdfComponent.defaultProps = {
  src: `public/compressed.tracemonkey-pldi-09.pdf`//`public/helloworld.pdf`
};

export default PdfComponent;
