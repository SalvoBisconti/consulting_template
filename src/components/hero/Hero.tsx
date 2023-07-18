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
            src="https://generalbucket10.s3.eu-central-1.amazonaws.com/hero.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRjBEAiB59pKDLBnrLWh%2B52Z%2BOcst49m4mw%2BYViJ6v0Lm7BFsaAIgIMwUFPhg61BE%2BnV%2B6aiaryTK9evg6uUKKlMg1K47ZJEq5AIIdBAAGgw2MDU4NjUxNTMzMDUiDIk4vyqB8cWx7Qzp4CrBAgscGV0uod%2FzLuNFu0rF0tTrScUMtILWrtQ%2FS7%2F0YTBUH6kY0nwJqU%2FNyj1%2BZuCIqgqxPGj%2Fv%2Ffbsjw0k2YuCWjeoumtb8OX7Dk%2FWCE5HxXAL1tfnAh4m0tKkAtmvi1AlvH0LeifdoFRreGE4ZEtB9yXOj44E53ZFG4Rok5%2FOGoYPb89vucSJK5eoD%2FEsj87oH6K3CjUINNLvGHXJzruV6gmQjgZpD9sTGEneDpFVTtwkJQLufYPeXRgDmmk2EEMl6e0Y8%2Bh72TxK96rknpLsbqF2Ot2%2BS8kwlh%2FTpDE2JU23k0kkmuLRoVSCdu%2B3Fd6JNH3nSpFinxv0DHXCDhzgNihJg6HOv0xplZjIx%2FcbVrB3HxVeTLMDUoKAPm9FDSFsP6hKHyGIJbK4TYrK%2FFgC1Riy5PbVtWwTn%2FhMhqeTGlYOTCv1NmlBjq0AvQcNYCMdnNBaBPpOvT3dJPZAic2fL%2F9o1EnrZl8kSoNDl3Swsy6%2B1PwbL758XjHmNe9Peb9svr5Mlmw4UuL2DgPV8OvNtAi3m21ik7wQ3uIQxiMJ7gpbQq%2FK9dbRXBDVpJYGu%2BLgxlGdibWBUbCUj5TaZcDxntV9dp05LASYUh5TSbrJ3aCyiYCRkHyMyrMNPewyHsW17%2FlvFSD1vHlLWbR9frxOhXXkFvYJAkBqaA83Vc2PPSWzkFDVRlVIOCmYDCf1iHx7eWcI0tBQGXm7O8094uhDAiRRfpi6ad1lpdcjLJdU6aON41ajWYkGrepQNak5yTRr6JTzr09fgxoCo%2BcJs3YbLwwrMc%2Bw1Y7O8MSgUCobSEI1hbInpCEQCeeqxXAyVyQA6FiIgXg5%2BpmAqc2kdMc&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230718T112225Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY2EDASMM6TCYY35K%2F20230718%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=c3f51d2ec793083dfea80037917237a6a6a565b3f6806da1f65abbdc4a65a764"
            type="video/mp4"
          />
          <source
            src="https://generalbucket10.s3.eu-central-1.amazonaws.com/hero.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRjBEAiB59pKDLBnrLWh%2B52Z%2BOcst49m4mw%2BYViJ6v0Lm7BFsaAIgIMwUFPhg61BE%2BnV%2B6aiaryTK9evg6uUKKlMg1K47ZJEq5AIIdBAAGgw2MDU4NjUxNTMzMDUiDIk4vyqB8cWx7Qzp4CrBAgscGV0uod%2FzLuNFu0rF0tTrScUMtILWrtQ%2FS7%2F0YTBUH6kY0nwJqU%2FNyj1%2BZuCIqgqxPGj%2Fv%2Ffbsjw0k2YuCWjeoumtb8OX7Dk%2FWCE5HxXAL1tfnAh4m0tKkAtmvi1AlvH0LeifdoFRreGE4ZEtB9yXOj44E53ZFG4Rok5%2FOGoYPb89vucSJK5eoD%2FEsj87oH6K3CjUINNLvGHXJzruV6gmQjgZpD9sTGEneDpFVTtwkJQLufYPeXRgDmmk2EEMl6e0Y8%2Bh72TxK96rknpLsbqF2Ot2%2BS8kwlh%2FTpDE2JU23k0kkmuLRoVSCdu%2B3Fd6JNH3nSpFinxv0DHXCDhzgNihJg6HOv0xplZjIx%2FcbVrB3HxVeTLMDUoKAPm9FDSFsP6hKHyGIJbK4TYrK%2FFgC1Riy5PbVtWwTn%2FhMhqeTGlYOTCv1NmlBjq0AvQcNYCMdnNBaBPpOvT3dJPZAic2fL%2F9o1EnrZl8kSoNDl3Swsy6%2B1PwbL758XjHmNe9Peb9svr5Mlmw4UuL2DgPV8OvNtAi3m21ik7wQ3uIQxiMJ7gpbQq%2FK9dbRXBDVpJYGu%2BLgxlGdibWBUbCUj5TaZcDxntV9dp05LASYUh5TSbrJ3aCyiYCRkHyMyrMNPewyHsW17%2FlvFSD1vHlLWbR9frxOhXXkFvYJAkBqaA83Vc2PPSWzkFDVRlVIOCmYDCf1iHx7eWcI0tBQGXm7O8094uhDAiRRfpi6ad1lpdcjLJdU6aON41ajWYkGrepQNak5yTRr6JTzr09fgxoCo%2BcJs3YbLwwrMc%2Bw1Y7O8MSgUCobSEI1hbInpCEQCeeqxXAyVyQA6FiIgXg5%2BpmAqc2kdMc&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230718T112225Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY2EDASMM6TCYY35K%2F20230718%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=c3f51d2ec793083dfea80037917237a6a6a565b3f6806da1f65abbdc4a65a764"
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
