const storyParagraphs = [
  "एक गाँव में मोहन नाम का एक गरीब कुम्हार रहता था। रोज़ सुबह वह नदी के किनारे पहुंचता, हथेलियों से कोमल मिट्टी उठाकर अपने सपनों की तरह संभाल कर घर लाता।",
  "उसके courtyard में रखा पुराना चाक उसकी दुनिया था। जैसे ही चाक घूमता, मोहन की आँखें चमक उठतीं और वह हर घड़े में अपनी उम्मीदें गढ़ देता।",
  "एक दिन उसने मिट्टी से एक खास घड़ा बनाया। उसे लगा कि इसमें उसने सिर्फ पानी ही नहीं, बल्कि अपना सपना भी बसाया है—किसी की प्यास बुझाने का सपना।",
  "घड़ा शहर के बाज़ार भेज दिया गया। मोहन को उसके बदले बस कुछ सिक्के मिले, लेकिन उसे यह पता नहीं था कि उसका बनाया घड़ा एक बच्चे के हाथों तक पहुँचा जिसने लंबी प्यास के बाद पहली बार पानी का स्वाद महसूस किया।",
  "उस पल मोहन ने शायद थोड़े पैसे कम कमाए हों, मगर घड़ा बनाने वाले हाथों ने किसी अनजान की प्यास बुझाकर वह खुशी पा ली जो किसी भी सिक्के से बड़ी थी।",
];

const highlights = [
  {
    title: "मिट्टी की सुबह",
    detail:
      "नदी से मिट्टी लाते समय मोहन हर कण में नई कहानी महसूस करता था। उसी उम्मीद ने उसे रोज़ मेहनत करने की ताकत दी।",
  },
  {
    title: "पुराना चाक, नए सपने",
    detail:
      "घूमते चाक पर उकेरी हर रेखा मोहन की धुन और धैर्य का प्रतीक थी। वह हर घड़े को एक नई जिंदगी देता था।",
  },
  {
    title: "सपना शहर में",
    detail:
      "घड़े के शहर पहुँचने पर मोहन नहीं जानता था कि वह किसी बच्चे के लिए जीवन की पहली घूंट बन जाएगा—और यही उसकी वास्तविक कमाई थी।",
  },
];

const timelineItems = [
  { time: "भोर", event: "नदी से मिट्टी लेना" },
  { time: "सुबह", event: "चाक पर घड़े गढ़ना" },
  { time: "दोपहर", event: "घड़ा बाज़ार भेजना" },
  { time: "शाम", event: "बच्चे की प्यास बुझना" },
  { time: "रात", event: "मोहन की शांत नींद" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-amber-50 text-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16">
        <header className="rounded-3xl bg-gradient-to-br from-amber-300 via-amber-200 to-yellow-100 p-10 shadow-xl shadow-amber-200/60">
          <p className="text-sm font-semibold tracking-wide text-amber-700">
            मिट्टी से सपनों तक
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-amber-900 sm:text-5xl">
            मोहन और उसका खास घड़ा
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-amber-900/80">
            यह कहानी एक ऐसे कुम्हार की है जिसकी मेहनत ने किसी अनजान चेहरे पर
            मुस्कान ला दी। यह घड़ा सिर्फ मिट्टी का नहीं था, बल्कि उम्मीदों से
            गढ़ा गया था।
          </p>
        </header>

        <section className="grid gap-8 rounded-3xl bg-white/80 p-10 shadow-lg shadow-amber-100/70 sm:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-amber-900">
              मोहन की छोटी सी दुनिया
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              मोहन की दिनचर्या सरल थी, मगर उसके सपने विशाल थे। हर घड़ा उसके लिए
              किसी नयी उम्मीद की शुरुआत था। वह जानता था कि मेहनत का फल कभी सूना
              नहीं जाता।
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              गाँव की फिज़ा, नदी की ठंडी हवा, और चाक का निरंतर संगीत—इन सबने
              मिलकर मोहन को जिंदादिल बना रखा था। वह हर नए आदेश को एक उत्सव की
              तरह मानता था।
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl bg-amber-100/70 p-6">
            {timelineItems.map((item) => (
              <div
                key={item.time}
                className="flex items-start gap-4 rounded-xl bg-white/70 p-4 shadow-sm shadow-amber-900/5"
              >
                <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {item.time}
                </span>
                <p className="text-sm font-medium text-slate-800">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-amber-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-amber-900 transition group-hover:text-amber-700">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                {item.detail}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-slate-100 shadow-xl shadow-slate-900/50">
          <h2 className="text-3xl font-bold">कहानी की धड़कन</h2>
          <div className="mt-8 space-y-6">
            {storyParagraphs.map((para, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-slate-200/90"
              >
                {para}
              </p>
            ))}
          </div>
          <p className="mt-10 rounded-2xl bg-white/10 p-4 text-sm font-medium text-amber-200">
            मोहन ने भले ही कुछ सिक्के कमाए हों, पर जिसने पानी पिया उसने जीवन भर
            की कदर महसूस की। यही कहानी की आत्मा है।
          </p>
        </section>

        <footer className="rounded-3xl bg-white/80 p-6 text-center text-sm text-slate-500 shadow-inner shadow-amber-100/70">
          मिट्टी की गर्माहट और सपनों की ठंडक के बीच मोहन जैसा कुम्हार ही उगता
          है—जो मेहनत से उम्मीदें बनाता है और उन्हें दुनिया तक पहुंचाता है।
        </footer>
      </div>
    </main>
  );
}
