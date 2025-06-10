import useLabelStore from '../stores/label';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import InvoiceDoc from './InvoiceDoc';

const Invoice = () => {
    const label = useLabelStore(state => state.label);

    if (!label)
        return (
            <div className="flex w-full h-full justify-center items-center bg-base-200 rounded-lg">
                <div className="w-11/12 mx-auto border border-gray-700 h-11/12">
                    <h1 className="flex justify-center items-center w-full h-full text-xl text-center">
                        Click confirm to generate label!
                    </h1>
                </div>
            </div>
        );

    return (
        <div className="w-full h-full space-y-5 bg-base-300">
            <PDFViewer width="100%" height="100%" showToolbar={false}>
                <InvoiceDoc />
            </PDFViewer>

            <PDFDownloadLink
                document={<InvoiceDoc />}
                filename={`invoice_${label.deliveryID}.pdf`}
                download={`invoice_${label.deliveryID}.pdf`}
            >
                <button
                    type="button"
                    className="btn btn-success text-lg px-10 py-3"
                >
                    Download
                </button>
            </PDFDownloadLink>
        </div>
    );
};

export default Invoice;
