import useLabelStore from '../stores/label';

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

    return <div>Label Invoice</div>;
};

export default Invoice;
