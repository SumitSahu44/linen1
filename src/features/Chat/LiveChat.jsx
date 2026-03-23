import { useState } from 'react';
import { FaComments, FaPaperPlane } from "react-icons/fa";

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            from: "bot",
            text: "Hi! How can we help you with your linen requirements today?"
        }
    ]);

    const sendMessage = () => {
        if (!message.trim()) return;
        setMessages([...messages, { from: "user", text: message }]);
        setMessage("");
    };

    return (
        // Humne flex-col-reverse aur items-end use kiya hai taki button hamesha right side fix rahe
        <div className="fixed bottom-30 right-8 z-50 flex flex-col items-end gap-4">

            {/* Chat Box */}
            {isOpen && (
                <div className="w-80 h-[420px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden transition-all duration-300">

                    {/* Header */}
                    <div className="bg-[#2C3E50] text-white px-4 py-3 flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Parekh Support</p>
                            <p className="text-xs text-green-300">● Online</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-xl hover:text-gray-300"
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${
                                    msg.from === "user" ? "justify-end" : "justify-start"
                                }`}
                            >
                                <div
                                    className={`px-3 py-2 text-sm rounded-lg max-w-[70%] ${
                                        msg.from === "user"
                                            ? "bg-[#C0A080] text-white"
                                            : "bg-white border text-gray-700"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <form 
                        onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
                        className="border-t p-2 flex items-center gap-2 bg-white"
                    >
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-3 py-2 text-sm outline-none border rounded-md focus:border-[#C0A080]"
                        />
                        <button
                            type="submit"
                            className="bg-[#2C3E50] text-white p-2 rounded-md hover:bg-[#C0A080] transition"
                        >
                            <FaPaperPlane size={14} />
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-[#2C3E50] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200"
            >
                {/* Agar open hai to 'X' dikhayenge warna icon */}
                {isOpen ? <span className="text-2xl">×</span> : <FaComments size={20} />}
            </button>

        </div>
    );
};

export default LiveChat;