import useLabelStore from '../stores/label';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import LabelDoc from './LabelDoc';

const Label = () => {
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
        <div className="w-full min-h-fit h-full space-y-5 bg-base-300 overflow-auto">
            <PDFViewer width="100%" height="90%" showToolbar={false}>
                <LabelDoc />
            </PDFViewer>

            <PDFDownloadLink
                document={<LabelDoc />}
                filename={`invoice_${label.deliveryID}.pdf`}
                download={`invoice_${label.deliveryID}.pdf`}
            >
                <div className="max-w-sm mx-auto">
                    <button
                        type="button"
                        className="w-full btn btn-success text-lg px-10 py-3"
                    >
                        Download
                    </button>
                </div>
            </PDFDownloadLink>
        </div>
    );
};

export default Label;
