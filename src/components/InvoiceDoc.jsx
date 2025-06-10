import {
    Page,
    Text,
    View,
    Document,
    Image,
    StyleSheet
} from '@react-pdf/renderer';
import JsBarcode from 'jsbarcode';
import useLabelStore from '../stores/label';
import { useEffect, useState } from 'react';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFF'
    },
    section: {
        margin: 10,
        padding: 10
    }
});

const InvoiceDoc = () => {
    const label = useLabelStore(state => state.label);

    // states
    const [barcode, setBarcode] = useState(null);

    useEffect(() => {
        if (!label) return;

        console.log('label: ', label);

        const canvas = document.createElement('canvas');

        JsBarcode(canvas, label.deliveryID);

        setBarcode(canvas.toDataURL());
    }, [label]);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Image src={barcode} />
                </View>
                <View style={styles.section}>
                    <Text>{label.senderName}</Text>
                    <Text>{label.senderAddress}</Text>
                </View>
                <View style={styles.section}>
                    <Text>{label.receiverName}</Text>
                    <Text>{label.receiverAddress}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default InvoiceDoc;
