function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg = 'Lucky!';
        } else {
            msg = 'Unlucky!';
        }

        return (
            <div>
                <p>
                    Your number is: { num } | <strong>{msg}</strong> <br />
                    {
                        num === 7 && 
                            <img src='https://www.icegif.com/wp-content/uploads/2022/07/icegif-1307.gif' />
                    }
                </p>
            </div>
        );
    }
}
