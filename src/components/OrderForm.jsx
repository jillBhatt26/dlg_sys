import { useState } from 'react';
import { nanoid } from 'nanoid';
import useLabelStore from '../stores/label';

const OrderForm = () => {
    // stores
    const setLabel = useLabelStore(state => state.setLabel);

    const [senderName, setSenderName] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [senderAddressLine1, setSenderAddressLine1] = useState('');
    const [senderAddressLine2, setSenderAddressLine2] = useState('');
    const [senderAddressLine3, setSenderAddressLine3] = useState('');
    const [receiverAddressLine1, setReceiverAddressLine1] = useState('');
    const [receiverAddressLine2, setReceiverAddressLine2] = useState('');
    const [receiverAddressLine3, setReceiverAddressLine3] = useState('');

    // event handlers
    const handleConfirm = e => {
        e.preventDefault();

        if (
            !senderName ||
            !receiverName ||
            !senderAddressLine1 ||
            !receiverAddressLine1
        )
            return alert('Name and Address Line 1 Required!');

        const deliveryID = nanoid();

        setLabel({
            deliveryID,
            senderName,
            receiverName,
            senderAddressLine1,
            senderAddressLine2,
            senderAddressLine3,
            receiverAddressLine1,
            receiverAddressLine2,
            receiverAddressLine3
        });
    };

    return (
        <div>
            <form
                className="bg-base-200 w-full py-5 px-10 rounded-lg"
                onSubmit={handleConfirm}
            >
                <h1 className="text-4xl mb-10 text-center w-full">
                    Order Details
                </h1>
                <fieldset className="fieldset w-full bg-base-300 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Sender details</legend>

                    <label className="label">Sender Name (Required)</label>
                    <input
                        type="text"
                        className="input w-full"
                        // placeholder="Sender Name"
                        value={senderName}
                        onChange={e => setSenderName(e.target.value)}
                    />

                    <label className="label">
                        Sender Address Line 1 (Required)
                    </label>
                    <input
                        type="text"
                        className="input w-full"
                        // placeholder="Sender Address Line 1"
                        value={senderAddressLine1}
                        onChange={e => setSenderAddressLine1(e.target.value)}
                    />

                    <label className="label">Sender Address Line 2</label>
                    <input
                        type="text"
                        className="input w-full"
                        // placeholder="Sender Address Line 2"
                        value={senderAddressLine2}
                        onChange={e => setSenderAddressLine2(e.target.value)}
                    />

                    <label className="label">Sender Address Line 3</label>
                    <input
                        type="text"
                        className="input w-full"
                        // placeholder="Sender Address Line 3"
                        value={senderAddressLine3}
                        onChange={e => setSenderAddressLine3(e.target.value)}
                    />
                </fieldset>

                <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">
                        Receiver details
                    </legend>

                    <label className="label">Receiver Name (Required)</label>
                    <input
                        type="text"
                        className="input w-full"
                        // placeholder="Receiver Name"
                        value={receiverName}
                        onChange={e => setReceiverName(e.target.value)}
                    />

                    <label className="label">
                        Receiver Address Line 1 (Required)
                    </label>
                    <input
                        type="text"
                        className="input w-full"
                        // placeholder="Receiver Address Line 1"
                        value={receiverAddressLine1}
                        onChange={e => setReceiverAddressLine1(e.target.value)}
                    />

                    <label className="label">Receiver Address Line 2</label>
                    <input
                        type="text"
                        className="input w-full"
                        // placeholder="Receiver Address Line 2"
                        value={receiverAddressLine2}
                        onChange={e => setReceiverAddressLine2(e.target.value)}
                    />

                    <label className="label">Receiver Address Line 3</label>
                    <input
                        type="text"
                        className="input w-full"
                        // placeholder="Receiver Address Line 3"
                        value={receiverAddressLine3}
                        onChange={e => setReceiverAddressLine3(e.target.value)}
                    />
                </fieldset>

                <button
                    className="btn btn-success text-lg mt-5 w-full"
                    type="submit"
                >
                    Confirm
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
