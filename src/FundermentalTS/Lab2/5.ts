// RectangleAndCircle.ts
export class RectangleAndCircle {
    private radius: number=0;
    private width: number=0;
    private height: number=0;

    // get radius
    public getRadius(): number {
        return this.radius;
    }

    // set radius
    public setRadius(radius: number): void {
        this.radius = radius;
    }

    // get width
    public getWidth(): number {
        return this.width;
    }
    
    // set width
    public setWidth(width: number): void {
        this.width = width;
    }

    // get height
    public getHeight(): number {
        return this.height;
    }

    // set height
    public setHeight(height: number): void {
        this.height = height;
    }

    // Calculate the area of the circle
    public areaCircle(): number {
        let radius = this.radius;
        return Math.PI * radius * radius;
    }

    // Calculate the circumference of the circle
    public circumferenceCircle(): number {
        let radius = this.radius;
        return 2 * Math.PI * radius;
    }

    // Calculate the area of the rectangle
    public areaRectangle(): number {
        let width = this.width;
        let height = this.height;
        return width * height;
    }

    // Calculate the perimeter of the rectangle
    public circumferenceRectangle(): number {
        let width = this.width;
        let height = this.height;
        return 2 * (width + height);
    }
}
