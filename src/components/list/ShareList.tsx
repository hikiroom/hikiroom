import {
    FacebookShareButton,
    FacebookIcon,
    HatenaShareButton,
    HatenaIcon,
    LineShareButton,
    LineIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'react-share';
import styles from '@/styles/components/list/_ShareList.module.scss';

type Props = {
    url: string;
    title: string;
};

const ShareList: React.VFC<Props> = (props) => {
    return (
        <div className={styles['cmp_share-list']}>
            <p className={styles['cmp_share-list_hdg']}><span>シェアする</span></p>
            <ul className={styles['cmp_share-list_list']}>
                <li className={styles['cmp_share-list_list-item']}>
                    <TwitterShareButton url={props.url} title={props.title}>
                        <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>
                </li>
                <li className={styles['cmp_share-list_list-item']}>
                    <FacebookShareButton url={props.url}>
                        <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                </li>
                <li className={styles['cmp_share-list_list-item']}>
                    <HatenaShareButton url={props.url} title={props.title}>
                        <HatenaIcon size={40} round={true} />
                    </HatenaShareButton>
                </li>
                <li className={styles['cmp_share-list_list-item']}>
                    <LineShareButton url={props.url} title={props.title}>
                        <LineIcon size={40} round={true} />
                    </LineShareButton>
                </li>
            </ul>
        </div>
    );
}

export default ShareList;