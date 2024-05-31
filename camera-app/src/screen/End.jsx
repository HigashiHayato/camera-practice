import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const End = () => {
    return (
        <div className="container py-4">
            <h1 className="mb-4">データを送信しました。</h1>
            <Button variant="secondary" href="/" className="mr-2">
                ホームへ戻る
            </Button>
        </div>
    )
}

export default End;
