const Hero = () => {
  return (
    <div className="relative top-0 h-screen w-screen flex " id="home">
      <div className="z-10 absolute top-0 right-0 w-full h-full bg-[#0000004d]"></div>
      <div className="w-full h-full absolute bg-fixed">
        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover bg-fixed object-right"
        >
          <source
            src="https://my-firstandgeneral-bucket1.s3.eu-central-1.amazonaws.com/hero.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaDGV1LWNlbnRyYWwtMSJIMEYCIQCeCz95sHHezH69IgBmvuYEYkOPTV9tsxUF9yyF8dkAuQIhANFP0yTKJPFS452zshz6F8%2BiZ6%2Fi1fRDLy%2F9I5j4TTKeKu0CCJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjA1ODY1MTUzMzA1Igy83GKMOKUrSAL4mUMqwQIFua33FMqG9iAroQhNOMLay6k8RWPeGKht6Lj5PB%2BTeeGsqQ2n5UlYTLogUTsVjsi3lc8gFhM19OdoKmxggGTuQEHAwTWAriVNbOmXqjGgj7mqpntgFljza3jqrZQJ1COPI4YRAzW%2BoXd9fMzfW6WWjfay2qydOcbHp8bm%2Fu8uGzBLKS78tFOYOYXBiis5biFojsxtVUeBeyMAijEwI1LkMAGC6Noh4cT8jqXcSQk7sKa5ckAJzSstXrn7axIJnWabf81AOtz8692c9PSqmWiZ%2FhMBQ90y4Xqo%2FpqnqIedDpaKw94HFjZ4mIQfreTwTYeAh%2B8u9T9wgznl%2FnBHbKDMqo%2B%2FbwRq8Icy8s8Mr9wJ0%2BCRcll%2F8o3qKGWBNU4CsHkAs6nWH6D7AMUzbP1atp7QKlgPfRphOPRPX2UM0sTr3J0w953gpQY6sgJhqHkjg5b51wMnQUZDmGLLnqxKtAu3gROW%2FWJxNXaIShGKNryz%2Fcnxmq7Uis8RcKUR9aVO%2FNS7tGXCJp1SrzzsTiqXH4%2FY44vCzHyzAd0Iao23rqefWqQfku%2BUutn0uuwb4Ni4GfUkmgRsS7F%2Fg1vnbuhjvzvxzEUd0sTmkf0P%2BmBIQi1S%2Bxfyb8YJ3Y52%2FdWzIOQRnMKho3cGsCkT%2F634IHwZYvCHVpBWKT91QxrvHTZdo2XSEnyusHZw6pWx58aumnGLl8mY1ZxFQW5r7VAdYyZYrsqpmvH3yu5OBK4VWmmeFkWhVfwTOamRsuEA%2FEayUE9hNyFcR5VsR7PpxtGkWWJHZPQ4n8mvnbDFGxeNfNvjXf9dv%2FutiY4LuWVp%2BFtfKsWQM6%2FtM%2Ba2rKqmc2hFLck%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230719T164610Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY2EDASMM2ITLHRVE%2F20230719%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=57597d8208b873b3ce84089a4d90cdf9007f20361338260bb4e8eea9dbfc263e"
            type="video/mp4"
          />
          <source
            src="https://my-firstandgeneral-bucket1.s3.eu-central-1.amazonaws.com/hero.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaDGV1LWNlbnRyYWwtMSJIMEYCIQCeCz95sHHezH69IgBmvuYEYkOPTV9tsxUF9yyF8dkAuQIhANFP0yTKJPFS452zshz6F8%2BiZ6%2Fi1fRDLy%2F9I5j4TTKeKu0CCJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjA1ODY1MTUzMzA1Igy83GKMOKUrSAL4mUMqwQIFua33FMqG9iAroQhNOMLay6k8RWPeGKht6Lj5PB%2BTeeGsqQ2n5UlYTLogUTsVjsi3lc8gFhM19OdoKmxggGTuQEHAwTWAriVNbOmXqjGgj7mqpntgFljza3jqrZQJ1COPI4YRAzW%2BoXd9fMzfW6WWjfay2qydOcbHp8bm%2Fu8uGzBLKS78tFOYOYXBiis5biFojsxtVUeBeyMAijEwI1LkMAGC6Noh4cT8jqXcSQk7sKa5ckAJzSstXrn7axIJnWabf81AOtz8692c9PSqmWiZ%2FhMBQ90y4Xqo%2FpqnqIedDpaKw94HFjZ4mIQfreTwTYeAh%2B8u9T9wgznl%2FnBHbKDMqo%2B%2FbwRq8Icy8s8Mr9wJ0%2BCRcll%2F8o3qKGWBNU4CsHkAs6nWH6D7AMUzbP1atp7QKlgPfRphOPRPX2UM0sTr3J0w953gpQY6sgJhqHkjg5b51wMnQUZDmGLLnqxKtAu3gROW%2FWJxNXaIShGKNryz%2Fcnxmq7Uis8RcKUR9aVO%2FNS7tGXCJp1SrzzsTiqXH4%2FY44vCzHyzAd0Iao23rqefWqQfku%2BUutn0uuwb4Ni4GfUkmgRsS7F%2Fg1vnbuhjvzvxzEUd0sTmkf0P%2BmBIQi1S%2Bxfyb8YJ3Y52%2FdWzIOQRnMKho3cGsCkT%2F634IHwZYvCHVpBWKT91QxrvHTZdo2XSEnyusHZw6pWx58aumnGLl8mY1ZxFQW5r7VAdYyZYrsqpmvH3yu5OBK4VWmmeFkWhVfwTOamRsuEA%2FEayUE9hNyFcR5VsR7PpxtGkWWJHZPQ4n8mvnbDFGxeNfNvjXf9dv%2FutiY4LuWVp%2BFtfKsWQM6%2FtM%2Ba2rKqmc2hFLck%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230719T164610Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY2EDASMM2ITLHRVE%2F20230719%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=57597d8208b873b3ce84089a4d90cdf9007f20361338260bb4e8eea9dbfc263e"
            type="video/webm"
          />
        </video>
      </div>
      <h2 className="z-10 self-end mb-16 text-6xl text-white  p-10 md:mb-20 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        La consulenza finanziaria libera ed indipendente
      </h2>
    </div>
  );
};

export default Hero;
