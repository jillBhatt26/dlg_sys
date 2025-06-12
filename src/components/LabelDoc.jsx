import { useEffect, useState } from 'react';
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

const LabelDoc = () => {
    const label = useLabelStore(state => state.label);

    // states
    const [barcode, setBarcode] = useState(null);

    useEffect(() => {
        if (!label) return;

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
                    <Text>{label.senderAddressLine1}</Text>
                    {label.senderAddressLine2 && (
                        <Text>{label.senderAddressLine2}</Text>
                    )}
                    {label.senderAddressLine3 && (
                        <Text>{label.senderAddressLine3}</Text>
                    )}
                </View>
                <View style={styles.section}>
                    <Text>{label.receiverName}</Text>
                    <Text>{label.receiverAddressLine1}</Text>
                    {label.receiverAddressLine2 && (
                        <Text>{label.receiverAddressLine2}</Text>
                    )}
                    {label.receiverAddressLine3 && (
                        <Text>{label.receiverAddressLine3}</Text>
                    )}
                </View>
            </Page>
        </Document>
    );
};

export default LabelDoc;
