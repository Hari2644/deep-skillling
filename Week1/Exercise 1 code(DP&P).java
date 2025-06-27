class Logger {
    private static Logger instance;
    private Logger() {
        System.out.println("Logger initialized.");
    }
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}

public class SingletonLoggerTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("User clicked on 'Login' button.");
        logger1.log("Database connection established.");
        logger1.log("User successfully logged in.");
        Logger logger2 = Logger.getInstance();
        if (logger1 == logger2) {
            System.out.println("All logger references point to the same instance.");
        }
    }
}
