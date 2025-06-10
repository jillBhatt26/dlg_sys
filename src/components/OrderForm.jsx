import { useState } from 'react';
import { nanoid } from 'nanoid';
import useLabelStore from '../stores/label';

const OrderForm = () => {
    // stores
    const setLabel = useLabelStore(state => state.setLabel);

    const [senderName, setSenderName] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [senderAddress, setSenderAddress] = useState('');
    const [receiverAddress, setReceiverAddress] = useState('');

    // event handlers
    const handleConfirm = e => {
        e.preventDefault();

        if (!senderName || !receiverName || !senderAddress || !receiverAddress)
            return alert('All Fields Required!');

        const deliveryID = nanoid();

        setLabel({
            deliveryID,
            senderName,
            receiverAddress,
            receiverName,
            senderAddress
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

                    <label className="label">Sender Name</label>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Sender Name"
                        value={senderName}
                        onChange={e => setSenderName(e.target.value)}
                    />

                    <label className="label">Sender Address</label>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Sender Address"
                        value={senderAddress}
                        onChange={e => setSenderAddress(e.target.value)}
                    />
                </fieldset>

                <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">
                        Receiver details
                    </legend>

                    <label className="label">Receiver Name</label>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Receiver Name"
                        value={receiverName}
                        onChange={e => setReceiverName(e.target.value)}
                    />

                    <label className="label">Receiver Address</label>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Receiver Address"
                        value={receiverAddress}
                        onChange={e => setReceiverAddress(e.target.value)}
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
