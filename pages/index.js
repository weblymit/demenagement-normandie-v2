// import styles from '../styles/Home.module.css';
import Header from '../component/Header';
import SectionOne  from '../component/homePage/SectionOne';
import SectionTwo   from '../component/homePage/SectionTwoNosServices';
import SectionPourquoiNous   from '../component/homePage/SectionPourquoiNous';
import CommentCaMarche from '../component/homePage/CommentCaMarche';

export default function Home() {
	return (
		<div className="">
			<Header />
			<div className="bg-gray-50 py-20">
				<SectionOne />
			</div>
			<div className="py-28">
				<SectionTwo />
			</div>
			<div className=" bg-blue-100 py-28">
				<SectionPourquoiNous />
			</div>
			<div className=" py-28">
				<CommentCaMarche />
			</div>
		</div>
	);
}
