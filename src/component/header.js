import logo from './asset/z5515289576589_7c058af3ecae0bf7aa15794d1a56b014-removebg-preview.png'
function Header(){
return (
    
    <div class="header">
    <div class="logo">
        <a href="http://localhost:3000/"><img
                src={logo}
                alt="abcxyz"></img></a>
    </div>
    <div class="mid-header">
        <a href><span>New & Featured</span></a>
        <a href><span>Men</span></a>
        <a href><span>Women</span></a>
        <a href><span>Kids</span></a>
        <a href><span>Sale</span></a>
        <a href><span>Customise</span></a>
        <a href><span>SNKRS</span></a>
    </div>
    <div class="last-header">
        <div class="search-header">
            <i class="fa fa-solid fa-cat"></i><input
                type="text" placeholder="Search"></input>
        </div>
        <div class="last-header-2">
            <i class="fa fa-solid fa-heart"></i>
            <i class="fa fa-shopping-bag"></i>
        </div>
    </div>
</div>

);
}
export default Header;