import { useState, useRef, useEffect } from 'react';
import { FaComments, FaPaperPlane, FaUserTie, FaBoxOpen, FaInfoCircle } from "react-icons/fa";

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    const [messages, setMessages] = useState([
        {
            from: "bot",
            text: "Welcome to Parekh Linen! I'm your virtual assistant. How can we assist you with our premium textile collections today?",
            options: [
                { label: "Premium Collections", id: "collections" },
                { label: "Business Enquiries", id: "business" },
                { label: "Job Opportunities", id: "careers" }
            ]
        }
    ]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleBotReply = (userText) => {
        setIsTyping(true);
        setTimeout(() => {
            let reply = { from: "bot", text: "" };
            const input = userText.toLowerCase();

            if (input.includes("hello") || input.includes("hi")) {
                reply.text = "Greetings! How can I help you explore Parekh Linen's legacy of fine textiles today?";
            } else if (input.includes("order") || input.includes("quality") || input.includes("fabric")) {
                reply.text = "Quality is our heritage. We specialize in 1000-thread count Egyptian cotton and fine linens. For custom orders, please visit our Trade Enquiry page.";
            } else if (input.includes("job") || input.includes("career") || input.includes("vacancy")) {
                reply.text = "We are always looking for talent. Please check our Careers page for the latest job listings and application process.";
            } else if (input.includes("contact") || input.includes("help") || input.includes("address")) {
                reply.text = "You can find our contact details and office location on the Contact page. We are also available via WhatsApp for direct support.";
            } else {
                reply.text = "I'm sorry, I'm still learning. For specific inquiries about our textiles, please visit our Trade Enquiry or Contact pages.";
            }

            setMessages(prev => [...prev, reply]);
            setIsTyping(false);
        }, 1000);
    };

    const handleOptionClick = (optionId) => {
        const userChoice = { from: "user", text: optionId === "collections" ? "Tell me about your collections" : optionId === "business" ? "I have a business inquiry" : "I'm looking for job opportunities" };
        setMessages(prev => [...prev, userChoice]);

        setIsTyping(true);
        setTimeout(() => {
            let botResponse = { from: "bot", text: "" };
            if (optionId === "collections") {
                botResponse.text = "Our signature collection features premium linens and exquisite 1000-thread count Egyptian cotton, designed for international quality standards.";
            } else if (optionId === "business") {
                botResponse.text = "We welcome wholesale and export inquiries. Please fill out the form on our 'Trade Enquiry' page, and our export team will contact you shortly.";
            } else if (optionId === "careers") {
                botResponse.text = "Join our legacy! We post all our current openings on the 'Careers' page. You can apply directly through our online portal.";
            }
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userMsg = { from: "user", text: message };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = message;
        setMessage("");

        handleBotReply(currentInput);
    };

    return (
        <div className="fixed bottom-32 right-8 z-[9999] flex flex-col items-end gap-5">

            {/* Chat Box */}
            {isOpen && (
                <div className="w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">

                    {/* Header */}
                    <div className="bg-[#2C3E50] p-5 text-white flex justify-between items-center shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#C0A080] rounded-full flex items-center justify-center text-white font-serif font-bold italic shadow-inner">
                                PL
                            </div>
                            <div>
                                <h3 className="font-serif text-base font-bold tracking-wide">Parekh Linen</h3>
                                <p className="text-[10px] text-green-300 uppercase tracking-widest font-bold">● Active Now</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all text-xl"
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div
                        ref={scrollRef}
                        className="flex-1 p-5 overflow-y-auto space-y-4 bg-[#FDFBF7]"
                    >
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex flex-col ${msg.from === "user" ? "items-end" : "items-start"}`}>
                                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.from === "user"
                                    ? "bg-[#C0A080] text-white rounded-br-none"
                                    : "bg-white text-[#2C3E50] border border-gray-100 rounded-bl-none"
                                    }`}>
                                    {msg.text}
                                </div>

                                {/* Options Rendering */}
                                {msg.options && (
                                    <div className="flex flex-col gap-2 mt-4 w-full">
                                        {msg.options.map((opt) => (
                                            <button
                                                key={opt.id}
                                                onClick={() => handleOptionClick(opt.id)}
                                                className="w-full py-2 px-4 text-xs font-bold text-[#C0A080] border border-[#C0A080] rounded-full hover:bg-[#C0A080] hover:text-white transition-all duration-300 text-left"
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex items-center gap-2 text-gray-400 p-2">
                                <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                                <span className="text-[10px] uppercase font-bold tracking-widest">Bot is typing</span>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <form
                        onSubmit={sendMessage}
                        className="p-4 border-t bg-white flex items-center gap-2"
                    >
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your query..."
                            className="flex-1 bg-gray-50 border-none px-4 py-2.5 rounded-full text-sm focus:ring-1 focus:ring-[#C0A080] outline-none"
                        />
                        <button
                            type="submit"
                            className="w-10 h-10 bg-[#2C3E50] text-white rounded-full flex items-center justify-center hover:bg-[#C0A080] transition-colors shadow-md"
                        >
                            <FaPaperPlane size={14} />
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-[#2C3E50] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative group"
            >
                <div className="absolute inset-0 rounded-full bg-[#C0A080] opacity-0 group-hover:opacity-20 animate-ping"></div>
                {isOpen ? (
                    <span className="text-3xl font-light">×</span>
                ) : (
                    <FaComments size={24} />
                )}

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C0A080] rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold">
                        1
                    </span>
                )}
            </button>

        </div>
    );
};

export default LiveChat;