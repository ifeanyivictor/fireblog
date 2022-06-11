import React from "react";

const footer = [
  {
    title: "Get to Know Us",
    list: ["Career", "Blog", "About ShopX"],
  },

  {
    title: "News",
    list: ["Technology", "Food", "Politics", "Sports", "Business"],
  },
  {
    title: "Special Stories",
    list: ["Campus Life", "Panorama", "Opinion", "Cartoon"],
  },
  {
    title: "Let Us Help You",
    list: ["Covid 19", "Advertise with us", "Write Stories", "Delete Account"],
  },
  {
    title: "Download App",
    list: ["Android", "iPhone", "Windows"],
  },
];

function Footer() {
  const List = ({ list }) => {
    return list ? list.map((l, i) => <li className="footer-li" key={i}>{l}</li>) : null;
  };

  return (
    <div className="footer-body navbar navbar-expand-lg navbar-light bg-light">
      <div className="footer-wrap container-fluid bg-faded padding-media">
        <div className="footer-one">
          {footer.map((c) => (
            <>
            <div className="footer-options">
              <h1 className="title py-2">{c.title}</h1>
              <ul className="footer-ul">
                <List list={c.list} />
              </ul>
            </div>
          </>
          ))}
        </div>
        <div className="footer-newsletter">
          <h2 className="title py-2">Subscribe to our Newsletter</h2>
          <div className="newsletter">
            <input type='text' placeholder="email adress"></input>
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-copyright">Created by Ifeanyi Victor. All right reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
