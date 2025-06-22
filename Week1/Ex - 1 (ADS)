import java.util.HashMap;
import java.util.Map;

class Product {
    private String productId;
    private String productName;
    private int quantity;
    private double price;

    public Product(String productId, String productName, int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public String getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Product[ID=" + productId + ", Name=" + productName + ", Quantity=" + quantity + ", Price=" + price + "]";
    }
}

class Inventory {
    private Map<String, Product> products;

    public Inventory() {
        products = new HashMap<>();
    }

    public void addProduct(Product product) {
        products.put(product.getProductId(), product);
    }

    public Product getProduct(String productId) {
        return products.get(productId);
    }

    public void updateProduct(String productId, int quantity, double price) {
        Product product = products.get(productId);
        if (product != null) {
            product.setQuantity(quantity);
            product.setPrice(price);
        }
    }

    public void deleteProduct(String productId) {
        products.remove(productId);
    }

    public void printInventory() {
        for (Product p : products.values()) {
            System.out.println(p);
        }
    }
}

public class InventoryManagementSystem {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        inventory.addProduct(new Product("P101", "Widget", 100, 9.99));
        inventory.addProduct(new Product("P102", "Gadget", 50, 19.99));
        inventory.addProduct(new Product("P103", "Thingamajig", 200, 4.99));
        inventory.printInventory();

        inventory.updateProduct("P102", 75, 18.99);
        inventory.deleteProduct("P103");
        System.out.println("\nAfter update and delete:");
        inventory.printInventory();
    }
}
