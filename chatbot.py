print("=" * 40)
print("🤖 Welcome to CodSoft AI Chatbot")
print("Type 'bye' to exit")
print("=" * 40)

while True:
    user = input("\nYou: ").strip().lower()

    if user == "hi":
        print("Bot: Hello! Welcome.")
    elif user == "hello":
        print("Bot: Hi! How can I help you?")
    elif user == "how are you":
        print("Bot: I am doing great. Thanks for asking!")
    elif user == "your name":
        print("Bot: My name is CodSoft AI Chatbot.")
    elif user == "what can you do":
        print("Bot: I can answer simple questions using predefined rules.")
    elif user == "python":
        print("Bot: Python is a popular programming language.")
    elif user == "ai":
        print("Bot: AI stands for Artificial Intelligence.")
    elif user == "thank you":
        print("Bot: You're welcome!")
    elif user == "bye":
        print("Bot: Goodbye! Have a wonderful day.")
        break
    else:
        print("Bot: Sorry, I don't understand that. Please try another question.")
        