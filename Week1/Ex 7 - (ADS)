import java.util.Scanner;

public class FinancialForecast {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter current value: ");
        double currentValue = sc.nextDouble();
        System.out.print("Enter annual growth rate (as decimal, e.g., 0.1 for 10%): ");
        double rate = sc.nextDouble();
        System.out.print("Enter number of years to predict: ");
        int years = sc.nextInt();
        sc.close();
        double futureValue = currentValue * Math.pow(1 + rate, years);
        System.out.printf("Predicted future value after %d years: %.2f%n", years, futureValue);
    }
}
