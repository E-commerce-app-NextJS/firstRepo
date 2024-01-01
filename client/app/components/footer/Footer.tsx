import Link from "next/link"
import Contenair from "../../home/Contenair"
import FooterList from "./FooterList"
import {MdFacebook} from 'react-icons/md'
import {AiFillTwitterCircle,AiFillInstagram, AiFillYoutube,} from 'react-icons/ai'

const Footer=()=>{

    return (
        <footer className="bg-slate-700 text-slate-200 tx-small mt-16">
            <Contenair>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Categories</h3>
                        <Link href='#'>Men</Link>
                        <Link href='#'>Women</Link>
                        <Link href='#'>Children</Link>
                        <Link href='#'>Babies</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Services</h3>
                        <Link href='#'>Contact Us</Link>
                        <Link href='#'>Shipping Policy</Link>
                        <Link href='#'>Return and Exchanges</Link>
                        <Link href='#'>FAQS</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Services</h3>
                        <p>
                        Explore our curated collection of stylish and versatile clothing,
                         meticulously selected to elevate your fashion game.
                        </p>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-2">
                            <MdFacebook size={40}/>
                            <AiFillTwitterCircle size={40}/>
                            <AiFillInstagram size={40}/>
                            <AiFillYoutube size={40}/>
                        </div>
                    </FooterList>
                </div>
            </Contenair>
        </footer>
    )

}

export default Footer